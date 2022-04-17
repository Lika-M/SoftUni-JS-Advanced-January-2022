function constructionCrew(worker){

    if(worker.dizziness){
        let neededWater = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += neededWater;
        worker.dizziness = false;
    }
    return worker

}

let result = constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
  console.log(result);
  let result2 = constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )
  console.log(result2);
  