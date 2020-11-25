let baseUrl = 'https://taurus-luna.propulsion-learn.ch';

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8000'
} else {
    baseUrl = 'https://taurus-luna.propulsion-learn.ch'
}

export default baseUrl;
