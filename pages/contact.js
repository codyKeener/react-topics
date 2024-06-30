import Link from 'next/link';

function Contact() {
  return (
    <>
      <h1>Testing</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/props">Props</Link>
        </li>
        <li>
          <Link href="/hooks">Hooks</Link>
        </li>
        <li>
          <Link href="/routes">Routes</Link>
        </li>
        <li>
          <Link href="/forms">Forms</Link>
        </li>
      </ul>
    </>
  );
}

export default Contact;
