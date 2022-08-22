const CP = require("../model/cursedPerson")

module.exports = {
    async getAll(req, res) {
        try {
            const cursedPeople = await CP.find() //busca todos 

            res.status(200).json(cursedPeople)
            console.log(cursedPeople)

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    },

    async getOne(req, res) {
        const id = req.params._id;

        try {
            const cursedPerson = await CP.findOne({
                _id: id
            }) //no mongo id eh UNDERLINEid

            if (!cursedPerson) {
                res.status(422).json({
                    message: 'O amaldiçoado não existe!'
                })
                return
            }

            res.status(200).json(cursedPerson)
            console.log(cursedPerson)

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    },

    async delete(req, res) {
        const id = req.params._id;

        const cursedPerson = await CP.findOne({
            _id: id
        }) //no mongo id eh UNDERLINEid

        if (!cursedPerson) {
            res.status(422).json({
                message: 'O amaldiçoado não existe!'
            })
            return
        }


        try {

            await CP.deleteOne({
                _id: id
            })

            res.status(200).json({
                message: 'O amaldiçoado foi exorcizado!'
            })

            console.log("Removido")

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    },

    async create(req, res) {

        console.log('ta no create')
        const {
            name,
            age,
            curse
        } = req.body

        console.log('name' + name)

        if (!name) {
            res.status(422).json({
                error: 'O nome é obrigadorio'
            })
            return
        }

        const cursedPerson = {
            name,
            age,
            curse
        }
        try {
            await CP.create(cursedPerson)
            res.status(201).json({
                message: 'Amaldiçoado inserido com sucesso'
            }) //sucesso
            console.log(cursedPerson)
        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    },

    async update(req, res) {
        const id = req.params._id;

        const {
            name,
            age,
            curse
        } = req.body

        const cursedPerson = {
            name,
            age,
            curse
        }

        try {
            const updateCursedPerson = await CP.updateOne({
                _id: id
            }, cursedPerson)

            if (updateCursedPerson.matchedCount === 0) {
                res.status(422).json({
                    message: 'O amaldiçoado não existe!'
                })
                return
            }

            res.status(200).json(cursedPerson)
            console.log(cursedPerson)

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }

    }
}
