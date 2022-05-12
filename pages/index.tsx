
import MainLayout from '../components/layouts/MainLayout'
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about"><a>About</a></Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}
