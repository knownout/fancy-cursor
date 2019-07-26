function touch() {
    return 'ontouchstart' in window
        || navigator.maxTouchPoints;
};

const _touch = touch();
export { _touch as touch };