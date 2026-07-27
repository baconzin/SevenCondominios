export function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  const textColor = light ? "text-white" : "text-slate-900";
  const mutedColor = light ? "text-slate-300" : "text-slate-600";
  const iconColor = light ? "text-amber-500" : "text-amber-500";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex items-end gap-0.5 ${iconColor}`}>
        <div className="w-1.5 h-4 bg-current rounded-t-sm"></div>
        <div className="w-2.5 h-6 bg-current rounded-t-sm -mb-0.5"></div>
        <div className="w-2 h-5 bg-current rounded-t-sm"></div>
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-xl font-extrabold ${textColor} leading-none tracking-tight`}>Seven</span>
        <span className={`text-[10px] font-bold uppercase ${mutedColor} leading-none tracking-widest mt-1`}>Condomínios</span>
      </div>
    </div>
  );
}
