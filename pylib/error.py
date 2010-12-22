#!/usr/bin/env python

import sys
import traceback

def main():
    try:
        dir(xxx)
    except Exception, err:
        exc_type, exc_value, exc_traceback = sys.exc_info()
        print repr(traceback.format_exception(exc_type, exc_value,
                                          exc_traceback)) # return error string
if __name__ == '__main__':
    sys.exit(main())
