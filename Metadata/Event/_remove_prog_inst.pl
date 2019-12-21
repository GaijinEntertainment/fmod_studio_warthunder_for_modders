#!/usr/bin/perl
#remove (Programmer Instrument) string from sound name's end

open LOG, ">_log.txt";
opendir(DIR, ".") or die "can't opendir $dir: $!";

$i = 1;
while (defined(my $file = readdir(DIR))) {
	next if $file !~ /xml$/;
  
  open IN, $file or die "hard -> $file";
  @xml = <IN>;
  close IN;
  open OUT, ">$file" or die "hard2";
  foreach(@xml)
  {
    $line = $_;
    if (/Programmer Instrument/)
    {
      $line =~ s/\s\(Programmer Instrument\)//;
    }
    print OUT $line;
  }
  close OUT;
  $i++;
  print int($i * 100/8235);
}
closedir(DIR);
close LOG;
