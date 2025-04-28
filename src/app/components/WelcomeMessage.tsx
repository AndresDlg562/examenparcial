interface WelcomeMessageProps {
  fullName: string;
  membershipNumber: string;
}

export default function WelcomeMessage({ fullName, membershipNumber }: WelcomeMessageProps) {
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        ¡Hola, {fullName}!
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        Gracias por ser parte de Café Aurora.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Número de membresía: {membershipNumber}
      </p>
    </div>
  );
}