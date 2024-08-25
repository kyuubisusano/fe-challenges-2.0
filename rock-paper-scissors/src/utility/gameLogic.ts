
export const getRandomNumber = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 5) + 1
            resolve(randomNumber)
        }, 2000)
    })
}

export const userWins = (userSelected: number, houseSelected: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        try {
            console.log('a ', houseSelected, " ", userSelected)
            let diff = (houseSelected - userSelected + 5) % 5
            console.log(diff)
            if (diff === 1 || diff === 3) {
                resolve(1)
            } else if (diff === 0) {
                resolve(0)
            } else {
                resolve(-1)
            }
        } catch (error) {
            reject(error)
        }
    })
}

