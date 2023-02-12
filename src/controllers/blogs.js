const id = () => {
    const key = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "i", "I", "1", "2", "3", "4", "5", "6", "7"];
    return `${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}`
}

let array = []

const GET = (req, res) => {
    try {
        return res.status(200).json(array)
    } catch (error) { res.status(500).json(error) }
}

const GETONE = (req, res) => {
    try {
        const item = array.find(e => e.id === req.params.id)
        return res.status(200).json(item)
    } catch (error) { res.status(500).json(error) }
}

const POST = (req, res) => {
    try {
        const item = { id: id(), ...req.body }
        array.push(item)
        return res.status(201).json(item)
    } catch (error) { res.status(500).json(error) }
}

const PUT = (req, res) => {
    try {
        const item = array.find(e => e.id === req.params.id)
        const index = array.indexOf(item)
        array.splice(index, 1, { id: req.params.id, ...req.body })
        return res.status(200).json(item)
    } catch (error) { res.status(500).json(error) }
}

const DELETE = (req, res) => {
    try {
        const item = array.find(e => e.id === req.params.id)
        const index = array.indexOf(item)
        array.splice(index, 1)
        return res.status(200).json(item)
    } catch (error) { res.status(500).json(error) }
}

module.exports = { GET, GETONE, POST, PUT, DELETE }