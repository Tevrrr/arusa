import type { NextPage } from 'next'
import MainAdminContainer from '../../../components/AdminPanel/MainAdminContainer';

const Admins: NextPage = () => {

    return (
        <MainAdminContainer title='Admins' roles={['MAIN_ADMIN']}>

        </MainAdminContainer>
    )
}

export default Admins;