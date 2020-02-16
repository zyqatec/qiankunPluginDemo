export default {
    namespace: 'base',
    state: {
        loading: true
    },
    reducers: {
        setLoading(state, payload) {
            return {
                ...state,
                loading: payload.loading
            };
        }
    }
};