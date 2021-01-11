const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const connect = () => { return pool; }

function getAllProperties(res) {

    pool.query(`SELECT * FROM properties`, (err, result) => {
        if (err) {
            throw err;
        }

        res.status(200).send({ properties: result.rows });
    })
}

const getProperty = (id, res) => {
    
    pool.query(`
        SELECT * from Properties 
        WHERE id = $1
        `, [id],
        (err, result) => {
            if (err) {
                throw err;
            }
            
            res.status(200).send({ property: result.rows[0] });
        }
    )
    
}

function postProperty(property, res) {
    pool.query(`
        INSERT INTO Properties (
            price,
            num_bed,
            num_bath,
            name,
            address,
            city
        ) VALUES (
            $1, $2, $3, $4, $5, $6
        ) RETURNING id
        `, [
            property.price,
            property.numBed,
            property.numBath,
            property.name,
            property.address,
            property.city
        ], 
        (err, result) => {
            if (err) {
                throw err;
            }

            const lastId = result.rows[0].id;
            pool.query(`
                SELECT * from Properties 
                WHERE id = $1
                `, [lastId],
                (err, result) => {
                    if (err) {
                        throw err;
                    }
                    
                    const addedProperty = result.rows[0];
                    if (addedProperty) {
                        res.status(201).send({ property: addedProperty })
                    } else {
                        res.status(500).send('Server error. Could not add property');
                    }
                }
            )
        }
    )
}

function updateCourse(id, course, res) {
    pool.query(`
        UPDATE Courses
        SET name=$1, 
            teacher_id=$2, 
            price=$3,
            subject_id=$4
        WHERE id=$5
        `,[
            course.name,
            course.teacherId,
            course.price,
            course.subjectId,
            id
        ],
        (err) => {
            if (err) {
                throw err;
            }

            pool.query(`
                SELECT * from Courses 
                WHERE id = $1
                `, [id],
                (err, result) => {
                    if (err) {
                        throw err;
                    }
                    
                    const updatedCourse = result.rows[0];
                    //send success/fail response based on result of database query
                    if (updatedCourse) {
                        res.status(201).send({ course: updatedCourse });
                    } else {
                        res.status(500).send('Server error. Could not add update course');
                    }
                }
            )
        }
    )
}

function deleteCourse (id, res) {
    pool.query(`DELETE FROM Courses WHERE id=$1`, [id], (err) => {
        if (err) {
            throw err;
        }

        res.status(204).send('Successfully deleted course')
    })
}

module.exports = { 
    getAllProperties, 
    getProperty, 
    postProperty, 
    updateCourse, 
    deleteCourse,
    connect
}