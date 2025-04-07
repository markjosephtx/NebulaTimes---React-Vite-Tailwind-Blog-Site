import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api/';

const getPost=axios.get(BASE_URL + 'articles?populate=*');
const getPostById=(id)=>axios.get(BASE_URL+'/articles/'+id+'?populate=*');

export default(
    getPost,
    getPostById
)