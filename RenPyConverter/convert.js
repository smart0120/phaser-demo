const Convert2 = require('./convert2')
const fs = require('fs')
const data = fs.readFileSync('./test.yaml', 'utf-8')
const lines = data.split(/\r?\n/).filter(a => a.trim().length > 0);


let convert = new Convert2(lines);
let parsed_lines = [];
let line;
while (line = convert.ParseLine()) {


    parsed_lines.push(line);
}

//console.log(parsed_lines.filter(a => a.Depth === 0 || a.Depth === 1))


class Statement {
    constructor(parsedLine) {
        const {Line, Depth} = parsedLine
        this.Line = Line;
        this.Depth = Depth;

    }
}

class StatementBlock extends Statement {
    constructor(parsedLine) {
        super(parsedLine)
        this.Statements = []

    }

    parseMethodStatements(lines, i) {
        while (lines[i] && lines[i].Depth > this.Depth) {
            let {j, statement} = parseStatement(lines, i);
            this.Statements.push(statement);
            i = j;
        }

        return i
    }
}


class LabelStatement extends StatementBlock {

    ConvertToJavascript(){

    }
}

class MenuDecision extends StatementBlock {

}

class MenuStatement extends StatementBlock {

}

class ElseStatement extends StatementBlock {
}

class IfStatement extends StatementBlock {

}

class ReturnStatement extends Statement {

}

class ElIfStatement extends StatementBlock {

}

class QuestStatement extends Statement {

}

class JumpStatement extends Statement {

}

const ast = [];

function parseStatement(parsed_lines, i) {

    let parsedLine = parsed_lines[i];
    if (!parsedLine) {
        debugger
    }
    let line = parsedLine.Line;

    if (lowerCase(line).startsWith("label")) {

        let conversationFunction = new LabelStatement(parsedLine);
        i = conversationFunction.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: conversationFunction}
    }
    if (lowerCase(line).startsWith("menu")) {
        let menuStatement = new MenuStatement(parsedLine);

        i = menuStatement.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: menuStatement}
    }
    if (lowerCase(line).startsWith("elif")) {
        let elIfStatement = new ElIfStatement(parsedLine);

        i = elIfStatement.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: elIfStatement}
    }
    if (lowerCase(line).startsWith("if")) {
        let menuStatement = new IfStatement(parsedLine);

        i = menuStatement.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: menuStatement}
    }
    if (lowerCase(line).startsWith("else")) {
        let menuStatement = new ElseStatement(parsedLine);

        i = menuStatement.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: menuStatement}
    }
    if (lowerCase(line).startsWith('"?')) {
        let menuDecision = new MenuDecision(parsedLine);

        i = menuDecision.parseMethodStatements(parsed_lines, i + 1);
        return {j: i, statement: menuDecision}
    }
    // if (lowerCase(line).startsWith('$quest')) {
    //     let questStatement = new QuestStatement(parsedLine);
    //     return {j: i + 1, statement: questStatement}
    // }
    // if (lowerCase(line).startsWith('jump ')) {
    //     let jumpStatement = new JumpStatement(parsedLine);
    //     return {j: i + 1, statement: jumpStatement}
    // }
    if (lowerCase(line).startsWith('return')) {
        let returnStatement = new ReturnStatement(parsedLine);
        return {j: i + 1, statement: returnStatement}
    }
    return {j: i + 1, statement: new Statement(parsedLine)}
}


function parseLabelName(line) {
    return line.split(/\s+/g).at(1).split(":").at(0)

}

function lowerCase(line) {
    return line.trim().toLowerCase();
}

let i = 0;
while (i < parsed_lines.length) {
    let {j, statement} = parseStatement(parsed_lines, i);
    //console.log(statement)
    i = j
    ast.push(statement)
}

console.log(ast)
console.log(JSON.stringify(ast))
