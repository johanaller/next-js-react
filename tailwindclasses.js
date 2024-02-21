// assume in base

const $bodytext = {
    colors: { default: '' },
    size: { default: 'w-full max-w-article-lg mx-auto gap-y-4 sm:gap-y-6' },
    variant: { default: 'flex flex-col' },
};

//   only sending:

const $bodytext = {
    colors: { default: '' },
}
// in brand doesn't overwrite size and variant 

// base
const $bodytext = {
    colors: { default: 'a' },
    size: { default: 'b' },
    variant: { default: 'c' },
  };
  
  //brand
  const $bodytext = {
    variant: { default: 'x' },
  }
  
  //result
  {
    colors: { default: 'a' },
    size: { default: 'b' },
    variant: { default: 'x' },
  };


  
//   there is also extend


// base
const $bodytext = {
    colors: { default: 'a' },
    size: { default: 'b' },
    variant: { default: 'c' },
  };
  
  //brand
  const $bodytext = {
    extend: {
      variant: { default: 'x' },
    }
  }
  
  //result
  {
    colors: { default: 'a' },
    size: { default: 'b' },
    variant: { default: 'c x' },
  };

