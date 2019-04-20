class KeyDown{
    constructor(event){
        this.keyCode = this.getKeyCode(event);
        this.key = this.getKey(event);
        this.code = this.getCode(event);
        this.location = this.getLocation(event);
        this.caption = 'Keycode';
        this.isReady = true;
        return this;
    }

    getKeyCode(event){
        return event.keyCode;
    }
    getKey(event){
        let newKeyText = '';
        if (event.key != null && event.key === 'Unidentified'){
            // Unidentified - redirect to docs
            newKeyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>';
        } else if (event.key == ' '){
            newKeyText = '(Space character)';
        } else {
            newKeyText = event.key || '';
        }

        return newKeyText;
    }

    getCode(event){
        // Check if code is Unidentified then redirect to docs
        var newCodeText = '';
        if (event.code != null && event.code === 'Unidentified'){
            newCodeText = '<a href="https://w3c.github.io/uievents-code/#table-key-code-special" target="_blank" rel="noopener">Unidentified</a>';
        } else {
            newCodeText = event.code || '';
        }

        return newCodeText;
    }

    getLocation(event){
        const keyLocations = {
            0: 'General keys',
            1: 'Left-side modifier keys',
            2: 'Right-side modifier keys',
            3: 'Numpad',
        };
        // Check if location is Unidentified then redirect to docs
        let newLocationText = '';
        let newLocationFriendlyText = '';
        if (event.location == null) {
            newLocationFriendlyText = 'Unknown';
        }
        else if (!(event.location in keyLocations)) {
            newLocationFriendlyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location" target="_blank" rel="noopener">Other</a>';
        }
        else {
            newLocationFriendlyText = keyLocations[event.location];
        }

        if (newLocationFriendlyText != 'Unknown') {
            newLocationText = `${event.location} <span class="text-muted">(${newLocationFriendlyText})</span>`;
        }
        else {
            newLocationText = newLocationFriendlyText;
        }

        return newLocationText;
    }
}

export default KeyDown;