function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return ("You are a teenager!")
  }
}


function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}


function ageChecker(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else if (age < 13) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}


function ternaryTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager"
  } else if (age < 12) {
    return "You are a kid"
  } else if (age > 20) {
    return "You are not a teenager"
  }
}


function switchAge(age) {
  switch (age) {
    case age: 15:
      return "You are a teenager";
    case age > 12 && age < 20:
      return "You are a teenager";
    default:
      return "You have an age";
  }
  // console.log("Tell us your age later.")
}
