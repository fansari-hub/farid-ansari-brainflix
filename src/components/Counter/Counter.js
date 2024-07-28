import "./Counter.scss";

export default function Counter({ title, counter }) {
  return (
    <p className="Counter font-Label--counter">
      {counter} {title}
    </p>
  );
}
