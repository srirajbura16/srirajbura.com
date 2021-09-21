import Image from 'next/image';
import Link from 'next/link';

export default function Nav({ children, home }) {
  return (
    <nav>
      <h1>Sriraj Bura</h1>
      <div className="page-links">
        {/* <Link>
          <a>Projects</a>
        </Link>
        <Link>
          <a>Skills</a>
        </Link>
        <Link>
          <a>About</a>
        </Link> */}
      </div>
    </nav>
  );
}
