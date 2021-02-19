const DOC_ID = '1gz4QcnYhpqOpFjQoOktKb_E9-hfBGdA45y-M6OIQnM4'
const API_KEY = 'AIzaSyBoX_m8IQZO2Fq__4XgkIRADhVXTJwtsbs'

import sheets from '@/helpers/sheets'
sheets.setKey(API_KEY)

export async function loadData() {
    const ranges = [
        'AI Courses!A2:L',
        'Departments!A2:B',
        'Tags!A2:D',
        'Keywords!A2:C',
    ]
    const response = await sheets.getRanges(DOC_ID, ranges)
    const valueRanges = response.valueRanges
    const courses = getCoursesFromValues(valueRanges[0].values)
    const departments = getDepartmentsFromValues(valueRanges[1].values)
    const tags = getTagsFromValues(valueRanges[2].values)
    const keywords = getKeywordsFromValues(valueRanges[3].values)
    return { courses, departments, tags, keywords }
}

function getCoursesFromValues(values) {
    const courses = []
    for (let row of values) {
        const code = row[2]
        const m = /\d{3}/g.exec(code)
        const codenumber = m ? Number(code.slice(m.index, m.index + 3)) : 999
        courses.push({
            department: row[1],
            code: code,
            codenumber: codenumber,
            title: row[3],
            instructor: row[4],
            student: row[5],
            description: row[6],
            content: row[7],
            prerequisite: row[8],
            studentTags: (row[9] || '').split(',').filter(c => c.trim() !== ''),
            applicationTags: (row[10] || '').split(',').filter(c => c.trim() !== ''),
            misc: row[11],
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

function getKeywordsFromValues(values) {
    const keywords = {}
    for (let row of values) {
        keywords[row[0]] = {
            title: row[0],
            tokens: (row[1] || '').split(',').map(c => c.trim()).filter(c => c !== ''),
            color: row[2],
        }
    }
    return keywords
}