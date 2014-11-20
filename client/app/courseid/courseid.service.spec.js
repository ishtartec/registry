'use strict';

describe('Service: courseid', function () {

  // load the service's module
  beforeEach(module('registroApp'));

  // instantiate service
  var courseid;
  beforeEach(inject(function (_courseid_) {
    courseid = _courseid_;
  }));

  it('should do something', function () {
    expect(!!courseid).toBe(true);
  });

});
