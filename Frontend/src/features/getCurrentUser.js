import { useDispatch } from 'react-redux';
import api from '../../utils/axios.js'
const getCurrentUser = async () => {
    try {
        const {data} = await api.get('/api/me');

        return data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
};

export default getCurrentUser;