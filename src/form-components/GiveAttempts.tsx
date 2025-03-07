import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestAmount, setRequestAmount] = useState("");

    function handleUseAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function handleGainAttempt() {
        const amount = parseInt(requestAmount);
        if (!isNaN(amount) && amount > 0) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestAmount}
                onChange={(e) => {
                    setRequestAmount(e.target.value);
                }}
                placeholder="Enter attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempt}>Gain</button>
        </div>
    );
}
