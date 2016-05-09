describe('lcd',function(){
  
  var inputs;
  
  beforeEach(function(){
    inputs = 910;
  });
  
  it('should print correct text',function(){
    spyOn(console, 'log');

    buildLcdString(inputs);
    
    var expectText = 
        
'._.'+'...'+'._.'+'\n'+
'|_|'+'..|'+'|.|'+'\n'+
'..|'+'..|'+'|_|';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});

describe('unit test',function(){

  describe('getConvertInputs',function(){
    var inputs;

    beforeEach(function(){
      inputs = 910;
    });

    it('should print correct text',function(){
      var expectText = ["9","1","0"];

      expect(getConvertInputs(inputs)).toEqual(expectText)
    });
  });
});