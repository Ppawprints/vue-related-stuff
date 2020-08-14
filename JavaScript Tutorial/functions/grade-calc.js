
const gradeCalculator = function(studentScore, maxScore) {
    const percentage = (studentScore / maxScore * 100).toFixed(2)
    let grade = null
    if (percentage >= 90) grade = 'A'
    else if (percentage >= 80) grade = 'B'
    else if (percentage >= 70) grade = 'C'
    else if (percentage >= 60) grade = 'D'
    else grade = 'F'

    return `You got a ${grade} (${percentage}%)!`
}

console.log(gradeCalculator(7, 9))