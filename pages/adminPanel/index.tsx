import type { NextPage } from 'next'
import  AuthController  from '../../components/AuthController';

const AdminPanel: NextPage = () => {

    return (
        <AuthController>
            ADMIN
        </AuthController>
    )
}

export default AdminPanel;