interface WelcomeMessageProps {
  fullName: string;
  membershipNumber: string;
}

export default function WelcomeMessage({ fullName, membershipNumber }: WelcomeMessageProps) {
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-amber-100 rounded-lg shadow-lg text-center border border-amber-200">
      <h2 className="text-3xl font-extrabold text-amber-900">
        ¡Hola, {fullName}!
      </h2>
      <p className="mt-2 text-lg text-amber-700">
        Gracias por ser parte de Café Aurora.
      </p>
      <p className="mt-4 text-sm text-amber-600">
        Número de membresía: {membershipNumber}
      </p>
    </div>
  );
}