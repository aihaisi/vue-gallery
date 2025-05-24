import os
import sys
import jmcomic

def main():
    
    if len(sys.argv) < 2:
        print("Error: Missing input number")
        return 1

    input_number = sys.argv[1]
    
    print(f"Received number: {input_number}")
    
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    option = jmcomic.JmOption.default()
    
    option.dir_rule.base_dir = current_dir + '/out'

    jmcomic.download_album(input_number, option)


if __name__ == '__main__':
    sys.exit(main())
