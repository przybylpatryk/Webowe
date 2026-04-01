from os.path import getsize


class Student:
    id = 0
    name = ""
    surname = ""
    age = 0

    def __init__(self, id, name, surname, age):
        self.id = id
        self.name = name
        self.surname = surname
        self.age = age

class Course:
    studentId = 0
    courseName = ""

    def __init__(self, studentId, courseName):
        self.studentId = studentId
        self.courseName = courseName

fStudents = open('students_example.txt', 'r')
fCourses = open('courses_example.txt', 'r')

coursesList = []

for course in fCourses:
    course = course.split(',')
    c = Course(course[0], course[1])
    coursesList.append(c)
print(coursesList)

for line in fStudents:
    line = line.split(',')
    line[3] = line[3].replace('\n', '')
    newFile = open('' + line[1] + '_' + line[2] + '.txt', 'w')
    newFile.write('Kursy: \n')
    for course in coursesList:
        if course.studentId == line[0]:
            print(line[1] + ' ' + line[2] + ' ' + '(' + line[3] + ' lat): ' + course.courseName)
            newFile.write('- ' + course.courseName)
