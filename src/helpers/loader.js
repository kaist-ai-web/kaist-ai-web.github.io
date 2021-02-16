const DOC_ID = '1gz4QcnYhpqOpFjQoOktKb_E9-hfBGdA45y-M6OIQnM4'
const API_KEY = 'AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs'

import sheets from '@/helpers/sheets'
sheets.setKey(API_KEY)

export async function loadData() {
    const ranges = [
        'Courses!A2:L',
        'Departments!A2:B',
        'Tags!A2:D',
    ]
    const response = await sheets.getRanges(DOC_ID, ranges)
    const valueRanges = response.valueRanges
    const courses = getCoursesFromValues(valueRanges[0].values)
    const departments = getDepartmentsFromValues(valueRanges[1].values)
    const tags = getTagsFromValues(valueRanges[2].values)
    return { courses, departments, tags }
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
            studentTags: (row[10] || '').split(',').filter(c => c.trim() !== ''),
            applicationTags: (row[11] || '').split(',').filter(c => c.trim() !== ''),
        })
    }
    return courses
}

function getDepartmentsFromValues(values) {
    const departments = {}
    for (let row of values) {
        departments[row[0]] = {
            title: row[0],
            color: row[1],
        }
    }
    return departments
}
function getTagsFromValues(values) {
    const tags = {}
    for (let row of values) {
        const category = row[0]
        if (!(tags[category])) {
            tags[category] = {}
        }
        tags[category][row[1]] = {
            title: row[1],
            color: row[2],
            description: row[3],
        }
    }
    return tags
}
