export default function SectionTitle({ chars }) {
  return (
    <div className="section-title">
      {chars.split('').map((char) => {
        return <div>{char}</div>;
      })}
    </div>
  );
}
