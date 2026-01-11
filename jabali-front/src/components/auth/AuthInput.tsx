interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function AuthInput({
  label,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 px-3 rounded-md bg-[#0b0e11] border border-[#1f2630] text-white focus:outline-none focus:border-[#f5c451]"
      />
    </div>
  );
}
