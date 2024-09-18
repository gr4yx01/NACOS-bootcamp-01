const getUserGreeting = (req, res) => {
    res.json({
        message: 'I am happy to be a chosen'
    })
}

const createUser = (req, res) => {
    const body = req.body;

    console.log(body);
    res.json({
        ...body
    })
}

export { 
    getUserGreeting,
    createUser
}