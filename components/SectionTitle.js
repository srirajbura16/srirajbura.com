export default function Nav({ chars }) {
  return (
    <div className="section-title">
      {chars.split('').map((char) => {
        return <div>{char}</div>;
      })}
    </div>
  );
}
