import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0e11]">
      <AuthForm type="register" />
    </div>
  );
}
