export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
      <p className="uppercase tracking-[0.2em]">{label}</p>
      <p className="mt-2 text-xs">Google AdSense placeholder. Replace after approval.</p>
    </div>
  );
}
