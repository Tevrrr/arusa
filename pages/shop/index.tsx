import type { NextPage } from 'next'
import MainContainer, { textColor } from '../../components/MainContainer';

const Shop: NextPage = () => {

    return (
        <MainContainer title='Shop' color={textColor.dark} emailForm={false}>
            <h1 className=' mt-14 p-2 text-center border-y border-oyster'>All</h1>
        </MainContainer>
    )
}

export default Shop;