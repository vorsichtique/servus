#!/usr/bin/env python3

from subprocess import call
import os
import datetime

def dump():
    os.system("rm /sql-dumps/*")
    dbpw = os.environ['DB_PW']
    dbs = [
        'evett',
        'gogo'
    ]

    for db in dbs:
        dumpname = db + '-' + datetime.datetime.now().strftime('%Y-%m-%d-%H:%M:%S')
        os.system("mysqldump -h servus_db_1 -uroot -p%s %s > /sql-dumps/%s.sql" % (dbpw, db, dumpname))

    os.system("/root/.local/bin/aws s3 sync /sql-dumps %s" % (os.environ['AWS_BUCKET_DUMP_PATH']))