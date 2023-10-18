// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size (width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function resize (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position (x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function move (newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        const newWidth = newSize.width > maxWidth ? maxWidth : newSize.width < 1 ? 1 : newSize.width;
        const newHeight = newSize.height > maxHeight ? maxHeight : newSize.height < 1 ? 1 : newSize.height;

        this.size.resize(newWidth, newHeight);
    }

    move(newPosition) {
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        const newX = newPosition.x > maxX ? maxX : newPosition.x < 0 ? 0 : newPosition.x;
        const newY = newPosition.y > maxY ? maxY : newPosition.y < 0 ? 0 : newPosition.y;

        this.position.move(newX, newY);
    }
}

export function changeWindow(newProgramWindow) {
    newProgramWindow.move(new Position());

    newProgramWindow.resize(new Size(400, 300));
    newProgramWindow.move(new Position(100, 150));

    return newProgramWindow;
}