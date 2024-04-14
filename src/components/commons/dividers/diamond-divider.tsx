export default function DiamondDivider() {
  return (
    <div className="hidden sm:flex items-center self-stretch ml-0 sm:ml-5">
      <div className="w-1 h-1 bg-white transform rotate-45" />
      <hr className="bg-white h-px flex-1" />
    </div>
  );
}
