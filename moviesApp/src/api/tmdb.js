import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDM1Y2FlMzkyZjNhNGIzODU5NDQxMDNlMWZkYTdhMyIsInN1YiI6IjYzMDlkZDAxNjVjMjZjMDA3ZmU2MjM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EfPyX0xMjfWagAQHjVns5qop9k6B47uJhpPmO54KpNA'
    }
});