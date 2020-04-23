class APIS {
    apis() {
        return {
            listing: {
                headers: {
                    'token': null
                },
                method: 'get',
                path: '/v1/types'
            }
        }
    }
}

export default new APIS;