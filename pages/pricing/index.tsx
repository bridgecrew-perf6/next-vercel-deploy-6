
import MainLayout from '../../components/layouts/MainLayout';
import Link from 'next/link';

const index = () => {
     return (
        <MainLayout>
            <h1>Pricing page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/"><a>Home</a></Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing.jsx</code>
            </p>
        </MainLayout>
    )
}

export default index
