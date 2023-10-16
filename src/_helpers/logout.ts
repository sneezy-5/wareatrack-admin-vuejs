import { accountService } from '@/_services';
import router from '@/router'


export function logout (){
    accountService.logout();
    router.push('/auth/login')
}