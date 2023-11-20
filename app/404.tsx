import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <p>
        Você pode tentar voltar para a página inicial <Link href="/">clicando aqui</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage