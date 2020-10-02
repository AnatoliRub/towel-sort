
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let c = []
    return towelSort.arguments.length === 0 || matrix.length === 0
    ?
    []
    :
    (matrix.forEach((item, index) => index % 2 == 0 ? c.push(item) : c.push(item.reverse())),
    c.join().split(','))
}
