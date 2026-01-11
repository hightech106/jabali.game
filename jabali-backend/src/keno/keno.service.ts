import { Injectable } from '@nestjs/common';
import { generateRNG } from './provably-fair';
import { KENO_PAYOUTS } from './keno.payout';

@Injectable()
export class KenoService {
  private readonly SERVER_SEED =
    'demo-server-seed-CHANGE-LATER';

  drawNumbers(clientSeed: string, nonce: number): number[] {
    const pool = Array.from({ length: 40 }, (_, i) => i + 1);
    const drawn: number[] = [];

    let call = 0;
    const rng = () =>
      generateRNG(this.SERVER_SEED, clientSeed, nonce + call++);

    for (let i = 0; i < 10; i++) {
      const idx = Math.floor(rng() * pool.length);
      drawn.push(pool[idx]);
      pool.splice(idx, 1);
    }

    return drawn;
  }

  getMultiplier(picksCount: number, matches: number): number {
    return KENO_PAYOUTS[picksCount]?.[matches] ?? 0;
  }

  placeBet(
    betAmount: number,
    picked: number[],
    clientSeed: string,
    nonce: number,
  ) {
    const drawn = this.drawNumbers(clientSeed, nonce);
    const matches = picked.filter(n => drawn.includes(n)).length;

    const multiplier = this.getMultiplier(picked.length, matches);
    const payout = betAmount * multiplier;

    return {
      drawnNumbers: drawn,
      matches,
      multiplier,
      payout,
      win: payout > 0,
    };
  }
}
