const DOC_ID = '1gz4QcnYhpqOpFjQoOktKb_E9-hfBGdA45y-M6OIQnM4'
const API_KEY = 'AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs'

import sheets from '@/helpers/sheets'
sheets.setKey(API_KEY)

export async function loadData() {
    const ranges = [
        'Courses!A2:J',
    ]
    const response = await sheets.getRanges(DOC_ID, ranges)
    const valueRanges = response.valueRanges
    const courses = getCoursesFromValues(valueRanges[0].values)
    return { courses }
}

function getCoursesFromValues(values) {
    const courses = []
    for (let row of values) {
        courses.push({
            department: row[0],
            code: row[1],
            title: row[2],
            instructor: row[3],
            student: row[4],
            description: row[5],
            content: row[6],
            prerequisite: row[7],
            application: row[8],
            misc: row[9],
        })
    }
    return courses
}
