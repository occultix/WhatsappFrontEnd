import axios from 'axios';

export function fetchChatList(){
    return{
        type:'GET_CHATLIST',
        payload: axios.get('http://192.168.0.14:5000/api/chatlist')
    }
}