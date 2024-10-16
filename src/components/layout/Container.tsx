type ContainerProps = { children: React.ReactNode };

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}
