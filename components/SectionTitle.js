export default function SectionTitle({ chars }) {
  return (
    <div className="section-title">
      {chars.split('').map((char, index) => {
        return <div key={index}>{char}</div>;
      })}
    </div>
  );
}
