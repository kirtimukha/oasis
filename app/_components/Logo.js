import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      { /*<Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />*/ }
      { /* Image 컴포넌트의 장점 */ }
      { /* 1. 정확한 w && h 사이즈 필요로 함 - 레이아웃 변경을 방지한다. */ }
      { /* 2. 이미지를 자동 변환한다. webP등으로 */ }{ ' ' }
      { /* 3. 자동으로 레이지 로드한다. - 뷰포트에 들어올 때만 로드 함 */ }
      <Image
        src={ logo }
        alt='The Wild Oasis logo'
        width='60'
        height='60'
        quality={ 100 }
      />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
